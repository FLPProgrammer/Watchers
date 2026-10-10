'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { Container } from './styles';
import { Navbar } from '../../Components/Navbar/Navbar';
import { BannerArea } from '../BannerArea/BannerArea';
import { ContentArea } from '../ContentArea/ContentArea';

export function HomePage() {
    const [showMovies, setShowMovies] = useState(false);

    return (
        <Container>
            <Navbar
                onContentClick={() => setShowMovies(true)}
                onHomeClick={() => setShowMovies(false)}
            />

            <AnimatePresence mode="wait">
                {showMovies ? (
                    <motion.div
                        key="movies"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ContentArea />
                    </motion.div>
                ) : (
                    <motion.div
                        key="home"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.4 }}
                    >
                        <BannerArea
                            onMoviesClick={() => setShowMovies(true)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    );
}