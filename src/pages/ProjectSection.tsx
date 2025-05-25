import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import './projectsection.css';

const ProjectSection: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [hasVideo, setHasVideo] = useState(false); // ✅ Track if video exists

    const openModal = async (videoPath: string, title: string) => {
        try {
            setHasVideo(false)
            if (videoPath != '') {
                const url = "https://d29c12qdaotyyt.cloudfront.net/" + videoPath
                setVideoUrl(url);
                setHasVideo(true); 
            }
            setModalTitle(title);
            setShowModal(true);
        } catch (err) {
            console.error('Failed to load video', err);
            setVideoUrl('');
            setModalTitle(title);
            setHasVideo(false); // ✅ Show fallback
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setVideoUrl('');
        setModalTitle('');
        setHasVideo(true);
    };

    return (
        <Box id="projects">
            <Container className='recent-projects'>
                <h1>projects (click me)</h1>
                <Container className="project-list">
                    
                    <Box className="project-card" onClick={() => openModal('encoded_files/ecp-demo.mp4', 'OceanEyes')}>
                        <StorageImage className="project-thumbnail" alt="" path="uploads/ecp-demo-thumbnail.png" />
                        <div>Enterprise Cloud Project - OceanEyes</div>
                        <div className='description'>AWS cloud powered online therapy business use case</div>
                    </Box>
                    <Box className="project-card" onClick={() => openModal('encoded_files/lost-found-demo.mp4', 'Lost & Found')}>
                        <StorageImage className="project-thumbnail" alt="" path="uploads/lost-found-demo-thumbnail.png" />
                        <div>NYP Lost & Found Cloud Website</div>
                        <div className='description'>AWS cloud powered student lost & found use case</div>
                    </Box>
                    <Box className="project-card" onClick={() => openModal('', 'UPlay')}>
                        <StorageImage className="project-thumbnail" alt="" path="uploads/404image.png" />
                        <div>NTUC UPlay Website (Online Event Marketplace)</div>
                        <div className='description'>C# powered with MySQL database</div>
                    </Box>
                    <Box className="project-card" onClick={() => openModal('', 'RedSG')}>
                        <StorageImage className="project-thumbnail" alt="" path="uploads/404image.png" />
                        <div>Enterprise Development Project - RedSg (Car Rental)    </div>
                        <div className='description'>Javascript powered with MySQL database</div>
                    </Box>
                    <Box className="project-card" onClick={() => window.location.href = 'https://sudoku-app-latest.onrender.com'}>
                        <StorageImage className="project-thumbnail" alt="" path="uploads/sudoku.png" />
                        <div>Sudoku</div>
                        <div className='description'>Used Nodejs to make Sudoku with session persistent data </div>
                    </Box>
                    <Box className="project-card" onClick={() => window.location.href = 'https://emailsender-latest.onrender.com'}>
                        <StorageImage className="project-thumbnail" alt="" path="uploads/emailsender.png" />
                        <div>Send Email</div>
                        <div className='description'>Send multiple emails at once. Used session so to not save app password in database & cryptography for encryption at rest.</div>
                    </Box>
                </Container>
            </Container>

            {showModal && (
                <Box className="custom-modal-overlay" onClick={closeModal}>
                    <Box className="custom-modal-content fade-in" onClick={(e) => e.stopPropagation()}>

                        {hasVideo ? (
                            videoUrl ? (
                                <video controls width="100%">
                                    <source src={videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <p>Loading video...</p>
                            )
                        ) : (
                            <p>No video available for this project.</p>
                        )}
                        <h2>{modalTitle}</h2>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default ProjectSection;
