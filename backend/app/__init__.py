
from flask import Flask
from config import config_options
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

from flask_migrate import migrate
# from flask_mail import Mail
bootstrap =Bootstrap()
db = SQLAlchemy()
# mail =Mail()

login_manager =LoginManager()
login_manager.session_protection ='strong'
login_manager.login_view ='auth.login'




def create_app(config_name):
    app = Flask(__name__)


    #configure UploadSet
 


    #creating application configurations using our configuration options and app instance
    app.config.from_object(config_options[config_name])
    



   #initialize bootstrap extension
    bootstrap.init_app(app)
    db.init_app(app)

    with app.app_context():
        db.create_all()
    login_manager.init_app(app)

    # mail.init_app(app)

    #register blueprint
    

    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint,url_prefix ='/authenticate')
    

    # #setting config
    # from.requests import configure_request
    # configure_request(app)




    return app



