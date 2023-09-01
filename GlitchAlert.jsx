import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  useColorModeValue,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const GlitchAlert = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 10000); // 10 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const glitchColors = [
    useColorModeValue('black', 'white'),
    useColorModeValue('blue.500', 'blue.300'),
    useColorModeValue('purple.500', 'purple.300'),
    useColorModeValue('pink.500', 'pink.300'),
  ];

  return (
    <Box>
      <IconButton
        position="fixed"
        top="200px"
        right="200px"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        aria-label="Toggle dark mode"
        variant="ghost"
      />
      <Box
        display={showAlert ? 'block' : 'none'}
        position="fixed"
        top="200px"
        right="200px" // Adjust right position to move it to the top right corner
        zIndex={9999}
        backgroundColor="rgba(10, 10, 10, 0.6)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="1rem"
        borderRadius="md"
        boxShadow="lg"
      >
        <Text
          fontSize="30px"
          fontWeight="bold"
          textAlign="center"
          textTransform="uppercase"
          position="relative"
        >
          {glitchColors.map((color, index) => (
            <Text
              key={index}
              position="absolute"
              top={`-${index}px`}
              left={`${index}px`}
              color={color}
              style={{
                animation: 'glitch 2s infinite',
              }}
            >
              ALERT! Your chip needs maintenance
            </Text>
          ))}
        </Text>
      </Box>
    </Box>
  );
};

export default GlitchAlert;
