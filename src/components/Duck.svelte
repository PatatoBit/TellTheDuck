<script>
	import { Canvas, InteractiveObject, OrbitControls, T } from '@threlte/core';

	import { GLTF, Text } from '@threlte/extras';

	import { degToRad } from 'three/src/math/MathUtils';
</script>

<div id="three">
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
			<OrbitControls
				autoRotate
				maxPolarAngle={degToRad(80)}
				enableZoom={false}
				target={{ y: 0.5 }}
			/>
		</T.PerspectiveCamera>

		<T.DirectionalLight castShadow position={[3, 10, 10]} />
		<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
		<T.AmbientLight intensity={0.2} />

		<!-- Duck -->
		<GLTF
			url="/duck/scene.gltf"
			interactive
			on:click={() => {
				console.log('User clicked!');
			}}
			position={{ x: 0, y: 0.6, z: 0 }}
		/>

		<Text position={{ x: 0, y: 1, z: 0 }} outlineColor="#ffffff" text="I hope you get better!" />

		<!-- Floor -->
		<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
			<T.CircleGeometry args={[3, 72]} />
			<T.MeshStandardMaterial color="white" />
		</T.Mesh>
	</Canvas>
</div>

<style>
	#three {
		position: fixed;
		height: 99vh;
		width: 99%;
		z-index: -2;
	}
</style>
