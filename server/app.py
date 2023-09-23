from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
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

# class Athletes(db.Model):
#     pass

# class AthleteSchema(ma.Schema):
#     class Meta:
#         fields  = ()
        
# athlete_schema = AthleteSchema()
# athletes_schema =  AthleteSchema(many=True)

@app.route("/equipment",methods=["GET","PUT","DELETE","POST"])
def equipment_api():
    if request.method == "GET":
        equipments = Equipments.query.all()
        data = equipments_schema(equipments)
        return jsonify(data)
    elif request.method == "POST":
        equipment = Equipments(request.json["name"],request.json["amount"])
        db.session.add(equipment)
    elif request.method == "PUT":
        pass
    elif request.method == "DELETE":
        pass

if __name__ == "__main__":
    app.run(debug=True,port=8000)


