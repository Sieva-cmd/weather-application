import os

class Config:
    
    SECRET_KEY =os.environ.get('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://moringa:sieva@localhost/weather'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

class ProdConfig(Config):
     SQLALCHEMY_DATABASE_URI ='postgresql://mhzslbuagaxuum:6465ecdb72b500ea1e54c72c5eb61bcd5b94a8edfb3b817b9d07d8d2c27c2605@ec2-54-226-18-238.compute-1.amazonaws.com:5432/dedmiq7v47db61'

    


class DevConfig(Config):

    Debug =True


config_options ={
    'development':DevConfig,
    'production':ProdConfig

}    