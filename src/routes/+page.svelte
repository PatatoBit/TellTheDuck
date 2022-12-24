<script lang="ts">
	import '../styles/index.scss';
	import { Canvas, InteractiveObject, OrbitControls, T } from '@threlte/core';
	import { GLTF, Text } from '@threlte/extras';
	import { degToRad } from 'three/src/math/MathUtils';

	let userInput: string = '';
</script>

<main>
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

	<div class="user">
		<form
			on:submit={(e) => {
				e.preventDefault();
				alert(`I hope you get better! ${userInput}`);
				userInput = '';
			}}
		>
			<input class="input" type="text" placeholder="Tell me anything!" bind:value={userInput} />
			<button class="input">🦆</button>
		</form>
	</div>
</main>

<style>
	#three {
		position: fixed;
		height: 100vh;
		width: 100%;
		z-index: -1;
	}
</style>
