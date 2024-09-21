import React from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Client from "../Client/Client";
import PropTypes from 'prop-types';


const Example = () => {
    return (
        <div style={{ background: '#FFF' }} className="pb-5">

            <HorizontalScrollCarousel />

            <div className="container mt-5">
                <h2 className="client--title">Ils nous font confiance</h2>
                <Client />
            </div>

        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] parallax">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[550px] w-[550px] overflow-hidden bg-neutral-200"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};
export default Example;

const cards = [
    {
        url: "./images/cablage-reseau.webp",
        title: "#1",
        id: 1,
    },
    {
        url: "./images/interconnexion-of-site.webp",
        title: "#2",
        id: 2,
    },
    {
        url: "./images/developpement-applications-responsive.webp",
        title: "#3",
        id: 3,
    },
    {
        url: "./images/controle-acces.webp",
        title: "#4",
        id: 4,
    },
    {
        url: "./images/video-surveillence.webp",
        title: "#5",
        id: 5,
    },
    {
        url: "./images/maintenance-informatique.webp",
        title: "#6",
        id: 6,
    },
    {
        url: "./images/router.webp",
        title: "#7",
        id: 7,
    },
    {
        url: "./images/mikrotik.webp",
        title: "#8",
        id: 8,
    },
];