import React, { useEffect } from 'react';
import * as THREE from 'three';

const PlanetWithParticles = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
    renderer.setPixelRatio(window.devicePixelRatio);
    const canvasContainer = document.getElementById('canvas-container');

    canvasContainer.style.position = 'absolute';
    canvasContainer.style.top = '-25%';
    canvasContainer.style.left = '8%';
    canvasContainer.style.width = '100%'; 
    canvasContainer.style.height = '100%'; 

    canvasContainer.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const color = new THREE.Color();
    const n = 30000;

    for (let i = 0; i < n; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 100;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions.push(x, y, z);

      const colorProbability = Math.random();
      const intensity = Math.random();
      const r = 1 - intensity;
      const g = 1 - intensity;
      const b = 1;
      color.setRGB(r, g, b);
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({ size: 0.1, vertexColors: true });
    const planet = new THREE.Points(geometry, material);
    scene.add(planet);

    camera.position.z = 350;

    const animate = () => {
      requestAnimationFrame(animate);
      planet.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      canvasContainer.removeChild(renderer.domElement);
      scene.remove(planet);
    };
  }, []);

  return (
    <div id="canvas-container" className=''>
    </div>
  );
};

export default PlanetWithParticles;
