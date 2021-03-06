
from app import create_app,db
from flask_script import Manager,Server
from app.models import User
from flask_migrate import Migrate,MigrateCommand


#creating app instance
app = create_app('production')




manager =Manager(app)
manager.add_command('server',Server)

Migrate =Migrate(app,db)
manager.add_command('db',MigrateCommand)

#running unittests
@manager.command
def test():
    import unittest
    tests =unittest.TestLoader().discover('tests')
    unittest.TextTestRunner(verbosity=2).run(tests)


@manager.shell
def make_shell_context():
    return dict(app =app, db = db ,User =User)    


if __name__ == '__main__':    manager.run()