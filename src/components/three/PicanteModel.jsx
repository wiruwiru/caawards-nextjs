import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function PicanteModel() {
    const group = useRef();
    const { scene } = useGLTF('/assets/modelos/picantito.glb');

    useFrame(() => {
        if (group.current) {
            group.current.rotation.y += 0.005;
        }
    });

    return <primitive object={scene} ref={group} scale={[2.6, 2.6, 2.6]} position={[0, -7, 0]} />;
}