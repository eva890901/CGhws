function buildTruck() {
	var truck = new THREE.Group();
	var carMaterial = new THREE.MeshLambertMaterial({color : 0xADD8E6});
	var wheelMaterial = new THREE.MeshBasicMaterial({color : 0x000000});
	var cylinderGeometry = new THREE.CylinderGeometry(2, 2, 10, 64);
	var wheel1 = new THREE.Mesh(cylinderGeometry, wheelMaterial);
	var wheel2 = wheel1.clone();

	var shape = new THREE.Shape();
	shape.moveTo( 0,0 );
	shape.lineTo( 0, 10 );
	shape.lineTo( 10, 10 );
	shape.lineTo( 10, 8 );
	shape.lineTo( 14, 8 );
	shape.lineTo( 16, 4 );
	shape.lineTo( 18, 4 );
	shape.lineTo( 18, 0 );
	shape.lineTo( 0, 0 );
	var extrudeSettings = {
	steps: 2,
	depth: 5,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelOffset: 0,
	bevelSegments: 1
	};
	var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
	var base = new THREE.Mesh(geometry, carMaterial);
	//base.rotation.y=Math.PI/2;
	truck.add(base, wheel1, wheel2);
	wheel1.position.set(2.5, 2, 2);
	wheel2.position.set(14.5, 2, 2);
	base.position.set(0, 3, 0);
	wheel1.rotation.z = Math.PI/2;
	wheel2.rotation.z = Math.PI/2;
	wheel1.rotation.y = Math.PI/2;
	wheel2.rotation.y = Math.PI/2;
 return truck;
	}
	
	function obstacleMash(size){
		obs = new THREE.Mesh(new THREE.CylinderGeometry(size,size,10,20),
				new THREE.MeshBasicMaterial({color : 'black'}));
		
		return obs;
	}