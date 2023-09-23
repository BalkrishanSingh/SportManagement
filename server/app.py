from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///project.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Equipments(db.Model):
    sno = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(128),nullable = False)
    amount = db.Column(db.Integer)

class EquipmentSchema(ma.Schema):
    class Meta:
        fields  = ('sno','name','amount')
        
equipment_schema = EquipmentSchema()
equipments_schema =  EquipmentSchema(many=True)

class Calender(db.Model):
    sno = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(128),nullable = False)
    venue = db.Column(db.String(256))
    time = db.Column(db.Datetime)

class CalenderSchema(ma.Schema):
    class Meta:
        fields  = ('sno','name','venue',"time")
        
calender_schema = EquipmentSchema()
calenders_schema =  EquipmentSchema(many=True)

@app.route("/calender",methods=["GET","POST"])
def calender_api():
    if request.method == "GET":
        calenders = Calender.query.all()
        data = equipments_schema.dump(calenders)
        return jsonify(data)
    elif request.method == "POST":
        calender = Calender(request.json["name"],request.json["amount"])
        db.session.add(calender)
        db.session.commit()
        return equipment_schema.jsonify(calender)
    
@app.route("/calender/<id>",methods=["GET","PUT","DELETE"])
def calender_specific_api(id):
    if request.method == "GET":
        calender = Calender.query.get(id)
        return calender_schema.jsonify(calender)
    
    elif request.method == "PUT":
        calender = Calender.query.get(id)
        calender.name = request.json["name"]
        calender.amount = request.json["amount"]
        db.session.add(calender)
        db.session.commit()
        return calender_schema.jsonify(calender)
    
    elif request.method == "DELETE":
        calender = Calender.query.get(id)
        db.session.delete(calender)
        db.session.commit()
        return calender_schema.jsonify(calender)

@app.route("/equipment",methods=["GET","POST"])
def equipment_api():
    if request.method == "GET":
        equipments = Equipments.query.all()
        data = equipments_schema.dump(equipments)
        return jsonify(data)
    elif request.method == "POST":
        equipment = Equipments(request.json["name"],request.json["amount"])
        db.session.add(equipment)
        db.session.commit()
        return equipment_schema.jsonify(equipment)
    
@app.route("/equipment/<id>",methods=["GET","PUT","DELETE"])
def equipment_specific_api(id):
    if request.method == "GET":
        equipment = Equipments.query.get(id)
        return equipment_schema.jsonify(equipment)
    
    elif request.method == "PUT":
        equipment = Equipments.query.get(id)
        equipment.name = request.json["name"]
        equipment.amount = request.json["amount"]
        db.session.add(equipment)
        db.session.commit()
        return equipment_schema.jsonify(equipment)
    
    elif request.method == "DELETE":
        equipment = Equipments.query.get(id)
        db.session.delete(equipment)
        db.session.commit()
        return equipment_schema.jsonify(equipment)


if __name__ == "__main__":
    app.run(debug=True,port=8000)


