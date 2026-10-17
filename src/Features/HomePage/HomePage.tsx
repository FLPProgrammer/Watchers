
'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { Container } from './styles';
import { Navbar } from '../../Components/Navbar/Navbar';
import { BannerArea } from '../BannerArea/BannerArea';
import { ContentArea } from '../ContentArea/ContentArea';
import { ConfigurationArea } from '../ConfigurationArea/ConfigurationArea';

type ActivePage = 'home' | 'content' | 'configuration';

export function HomePage() {
    const [activePage, setActivePage] = useState<ActivePage>('home');

    return (
        <Container>
            <Navbar
                onHomeClick={() => setActivePage('home')}
                onContentClick={() => setActivePage('content')}
                onConfigurationClick={() => setActivePage('configuration')}
            />

            <AnimatePresence mode="wait">
                {activePage === 'home' && (
                    <motion.div
                        key="home"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.4 }}
                    >
                        <BannerArea
                            onMoviesClick={() => setActivePage('content')}
                        />
                    </motion.div>
                )}

                {activePage === 'content' && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ContentArea />
                    </motion.div>
                )}

                {activePage === 'configuration' && (
                    <motion.div
                        key="configuration"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ConfigurationArea />
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    );
}
