function update(dt) {

	keyboard.update();
	  
	if (vel.length() > 0) {
		angle = 1.5*Math.PI + Math.atan2(vel.x, vel.z); 
	}
	
	if (keyboard.pressed("space"))  
		power = 0.1;               
	if (keyboard.pressed("up")){		
		power *= 1.2;        
	}
	if (keyboard.pressed("down")){  
		power /= 1.2;   
	}
	power = Math.clamp (power, 0, 80.0); 
	  
	  
	var angle_thrust = angle;
	if (keyboard.pressed("left")){
		angle_thrust += 0.3;
	}
	if (keyboard.pressed("right")){
		angle_thrust -= 0.3;
	}
		
	// compute force
	thrust = new THREE.Vector3(1,0,0).multiplyScalar(power).applyAxisAngle (new THREE.Vector3(0,1,0), angle_thrust);
	
	force.copy (thrust);
	force.add(vel.clone().multiplyScalar(-2))

	// eulers
	vel.add(force.clone().multiplyScalar(dt));
	pos.add(vel.clone().multiplyScalar(dt));
	
	
}