from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from datetime import date
from flask_cors import CORS
import os
basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///"+os.path.join(basedir, "sports.db")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Equipments(db.Model):
    sno = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(128),nullable = False)
    sport = db.Column(db.String(128))
    amount = db.Column(db.Integer)
    
    
    def __init__(self,name,sport,amount):
        self.name = name
        self.sport = sport
        self.amount = amount

class Athletes(db.Model):
    sno = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(128),nullable = False)
    sport = db.Column(db.String(128))
    achievements = db.Column(db.VARCHAR)
    
    def __init__(self,name,sport,achievements):
        self.name = name
        self.sport = sport
        self.achievements = achievements
class Calender(db.Model):
    sno = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(128),nullable = False)
    venue = db.Column(db.String(256))
    date = db.Column(db.Date)
    
    def __init__(self,name,venue,date):
        self.name = name
        self.venue = venue
        self.date = date

class EquipmentSchema(ma.Schema):
    class Meta:
        fields  = ('sno','name',"sport",'amount')
class AthleteSchema(ma.Schema):
    class Meta:
        fields  = ('sno','name','sport',"achievements")
class CalenderSchema(ma.Schema):
    class Meta:
        fields  = ('sno','name','venue','date')
        
equipment_schema = EquipmentSchema()
equipments_schema =  EquipmentSchema(many=True)

athlete_schema = AthleteSchema()
athletes_schema =  AthleteSchema(many=True)
  
calender_schema = CalenderSchema()
calenders_schema =  CalenderSchema(many=True)

@app.route("/athlete/",methods=["GET","POST"])
def athlete_api():
    if request.method == "POST":
        athletes = Athletes.query.all()
        data = athletes_schema.dump(athletes)
        return jsonify(data)
    elif request.method == "GET":
        athlete = Athletes(request.json["name"],request.json["sport"],request.json['achievements'])
        db.session.add(athlete)
        db.session.commit()
        return athlete_schema.jsonify(athlete)
    
@app.route("/athlete/<id>",methods=["GET","PUT","DELETE"])
def athlete_specific_api(id):

    if request.method == "PUT":
        athlete = Athletes.query.get(id)
        athlete.name = request.json["name"]
        athlete.sport = request.json["sport"]
        athlete.achievements = request.json["achievements"]
        db.session.add(athlete)
        db.session.commit()
        return athlete_schema.jsonify(athlete)
    
    elif request.method == "DELETE":
        athlete = Athletes.query.get(id)
        db.session.delete(athlete)
        db.session.commit()
        return athlete_schema.jsonify(athlete)
    elif request.method == "GET":
        athlete = Athletes.query.get(id)
        return athlete_schema.jsonify(athlete)


@app.route("/calender/",methods=["GET","POST"])
def calender_api():
    if request.method == "POST":
        y,m,d = (int(x) for x in (request.json['date']).split("-"))
        calender = Calender(request.json["name"],request.json["venue"],date(y,m,d))
        db.session.add(calender)
        db.session.commit()
        return calender_schema.jsonify(calender)
    elif request.method == "GET":
        calenders = Calender.query.all()
        data = calenders_schema.dump(calenders)
        return jsonify(data)
    
@app.route("/calender/<id>",methods=["GET","PUT","DELETE"])
def calender_specific_api(id):
    
    
    if request.method == "PUT":
        calender = Calender.query.get(id)
        calender.name = request.json["name"]
        calender.venue = request.json["venue"]
        calender.date = request.json["date"]
        db.session.add(calender)
        db.session.commit()
        return calender_schema.jsonify(calender)
    
    elif request.method == "DELETE":
        calender = Calender.query.get(id)
        db.session.delete(calender)
        db.session.commit()
        return calender_schema.jsonify(calender)
    elif request.method == "GET":
        calender = Calender.query.get(id)
        return calender_schema.jsonify(calender)

@app.route("/equipment/",methods=["GET","POST"])
def equipment_api():
   
    if request.method == "POST":
        equipment = Equipments(request.json["name"],request.json["sport"],request.json["amount"])
        db.session.add(equipment)
        db.session.commit()
        return equipment_schema.jsonify(equipment)
    elif request.method == "GET":
        equipments = Equipments.query.all()
        data = equipments_schema.dump(equipments)
        return jsonify(data)
    
@app.route("/equipment/<id>",methods=["GET","PUT","DELETE"])
def equipment_specific_api(id):
    
    if request.method == "PUT":
        equipment = Equipments.query.get(id)
        equipment.name = request.json["name"]
        equipment.sport = request.json["sport"]
        equipment.amount = request.json["amount"]
        db.session.add(equipment)
        db.session.commit()
        return equipment_schema.jsonify(equipment)
    elif request.method == "DELETE":
        equipment = Equipments.query.get(id)
        db.session.delete(equipment)
        db.session.commit()
        return equipment_schema.jsonify(equipment)
    elif request.method == "GET":
        equipment = Equipments.query.get(id)
        return equipment_schema.jsonify(equipment)

if __name__ == "__main__":
    app.run(debug=True,port=5000)