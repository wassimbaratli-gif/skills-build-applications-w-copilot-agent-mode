from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout


class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Use pymongo to drop collections for a clean state
        from django.conf import settings
        from pymongo import MongoClient
        client = MongoClient(settings.DATABASES['default']['CLIENT']['host'], settings.DATABASES['default']['CLIENT']['port'])
        db = client[settings.DATABASES['default']['NAME']]
        for collection in ['octofit_tracker_user', 'octofit_tracker_team', 'octofit_tracker_activity', 'octofit_tracker_leaderboard', 'octofit_tracker_workout']:
            db[collection].drop()

        # Create teams
        marvel = Team.objects.create(name='marvel', description='Marvel Team')
        dc = Team.objects.create(name='dc', description='DC Team')

        # Create users
        tony = User.objects.create(email='tony@stark.com', name='Tony Stark', team='marvel')
        steve = User.objects.create(email='steve@rogers.com', name='Steve Rogers', team='marvel')
        bruce = User.objects.create(email='bruce@wayne.com', name='Bruce Wayne', team='dc')
        clark = User.objects.create(email='clark@kent.com', name='Clark Kent', team='dc')

        # Create activities
        Activity.objects.create(user=tony, type='run', duration=30, date='2023-01-01')
        Activity.objects.create(user=steve, type='swim', duration=45, date='2023-01-02')
        Activity.objects.create(user=bruce, type='cycle', duration=60, date='2023-01-03')
        Activity.objects.create(user=clark, type='fly', duration=120, date='2023-01-04')

        # Create workouts
        Workout.objects.create(name='Pushups', description='Do pushups', difficulty='easy')
        Workout.objects.create(name='Pullups', description='Do pullups', difficulty='medium')
        Workout.objects.create(name='Squats', description='Do squats', difficulty='easy')

        # Create leaderboard
        Leaderboard.objects.create(team=marvel, points=200)
        Leaderboard.objects.create(team=dc, points=180)

        self.stdout.write(self.style.SUCCESS('Test data populated successfully.'))
