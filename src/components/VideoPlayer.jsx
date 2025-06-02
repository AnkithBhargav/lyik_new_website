import { useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { PlayCircleOutlined } from "@mui/icons-material";

const VideoPlayer = ({ videoPath }) => {
  const videoRef = useRef(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const handleOverlayClick = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.muted = false;
      video.play();
      setShowControls(true);
      setIsAudioEnabled(true);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%", // 16:9 aspect ratio
      }}
    >
      {/* Video Player */}
      <Box
        component="video"
        ref={videoRef}
        src={videoPath}
        autoPlay
        muted
        playsInline
        controls={showControls}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: showControls ? "auto" : "none", // allow interaction only after activation
        }}
      />

      {/* Overlay */}
      {!isAudioEnabled && (
        <Box
          onClick={handleOverlayClick}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            backgroundColor: "rgba(0,0,0,0.0)",
          }}
        >
          <PlayCircleOutlined
            sx={{ width: "60px", height: "60px", color: "#fff" }}
          />
          {/* <Typography
            sx={{
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "#fff",
              px: 3,
              py: 1,
              borderRadius: 2,
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Click to Play with Audio
          </Typography> */}
        </Box>
      )}
    </Box>
  );
};

export default VideoPlayer;
