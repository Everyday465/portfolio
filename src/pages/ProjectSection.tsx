import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { getUrl } from 'aws-amplify/storage';
import './projectsection.css';

const ProjectSection: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [hasVideo, setHasVideo] = useState(true); // ✅ Track if video exists

    const openModal = async (videoPath: string, title: string) => {
        try {
            const { url } = await getUrl({ path: videoPath });
            setVideoUrl(url.toString());
            setModalTitle(title);
            setHasVideo(true); // ✅ Reset
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
                    <Box className="project-card" onClick={() => openModal('uploads/ecp-demo.mp4', 'OceanEyes')}>
                        <StorageImage className="project-thumbnail" alt="" path="uploads/ecp-demo-thumbnail.png" />
                        <div>Enterprise Cloud Project - OceanEyes</div>
                        <div>AWS cloud powered online therapy business use case</div>
                    </Box>
                    <Box className="project-card" onClick={() => openModal('uploads/lost-found-demo.mp4', 'Lost & Found')}>
                        <StorageImage className="project-thumbnail" alt="" path="uploads/lost-found-demo-thumbnail.png" />
                        <div>NYP Lost & Found Cloud Website</div>
                        <div>AWS cloud powered student lost & found use case</div>
                    </Box>
                    <Box className="project-card" onClick={() => openModal('uploads/uplay-demo.mp4', 'UPlay')}>
                        <StorageImage className="project-thumbnail" alt="" path="uploads/uplay-demo-thumbnail.png" />
                        <div>NTUC UPlay Website (Online Event Marketplace)</div>
                        <div>C# powered</div>
                    </Box>
                </Container>
            </Container>

            {showModal && (
                <Box className="custom-modal-overlay" onClick={closeModal}>
                    <Box className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
                        
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
