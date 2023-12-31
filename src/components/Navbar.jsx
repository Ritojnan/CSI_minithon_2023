
import React from 'react';
import { Box, Flex, Spacer, IconButton, useDisclosure, Collapse } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

const LogoIcon = () => {
  return (
    <Box as="span" fontWeight="bold" fontSize="xl">
      Logo
    </Box>
  );
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="nav" bg="white" boxShadow="sm">
      <Flex maxW="container.xl" mx="auto" px={4} py={2} align="center">
        <LogoIcon />
        <Spacer />
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            variant="ghost"
            size="md"
            aria-label="Toggle Menu"
          />
        </Box>
        <Collapse in={isOpen} animateOpacity>
          <Box
            display={{ base: 'block', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            justifyContent="flex-end"
          >
            <Box mr={4}>
              <NavLink to="/">Home</NavLink>
            </Box>
            <Box mr={4}>
              <NavLink to="/about">About</NavLink>
            </Box>
            <Box mr={4}>
              <NavLink to="/help">Help</NavLink>
            </Box>
            <Box mr={4}>
              <NavLink to="/careers">Careers</NavLink>
            </Box>
          </Box>
        </Collapse>
      </Flex>
    </Box>
  );
};

export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { Box, Flex, Spacer, IconButton, useDisclosure } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { NavLink } from 'react-router-dom';
// // Uncomment and customize the LogoIcon component as needed
// const LogoIcon = () => {
//   return (
//     <Box as="span" fontWeight="bold" fontSize="xl">
//       Logo
//     </Box>
//   );
// };

// const Navbar = () => {
//   const { isOpen, onToggle } = useDisclosure();
//   const [isSticky, setIsSticky] = useState(false);

//   const handleScroll = () => {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     setIsSticky(scrollTop > 0);
//   };

//   // Attach scroll event listener
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <Box
//       as="nav"
//       position={isSticky ? 'fixed' : 'relative'}
//       top={0}
//       left={0}
//       right={0}
//       zIndex={100}
//       bg={isSticky ? 'white' : 'transparent'}
//       boxShadow={isSticky ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'}
//     >
//       <Flex
//         maxW="container.xl"
//         mx="auto"
//         px={4}
//         py={2}
//         align="center"
//       >
//         {/* Uncomment the LogoIcon component here */}
//         <LogoIcon />
//         <Spacer />
//         <Box display={{ base: 'block', md: 'none' }}>
//           {/* Mobile menu toggle button */}
//           <IconButton
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             onClick={onToggle}
//             variant="ghost"
//             size="md"
//             aria-label="Toggle Menu"
//           />
//         </Box>
//         <Box
//           display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
//           width={{ base: 'full', md: 'auto' }}
//           alignItems="center"
//           flexGrow={1}
//           justifyContent="flex-end" // Align links to the right
//         >
//           {/* Navigation links */}
//           <Box mr={4}><NavLink to="/">Home</NavLink></Box>
//           <Box mr={4}><NavLink to="/about">About</NavLink></Box>
//           <Box mr={4}><NavLink to="/help">Help</NavLink></Box>
//           <Box mr={4}><NavLink to="/careers">Careers</NavLink></Box>
//         </Box>
//       </Flex>
//       {/* Additional content */}
//     </Box>
//   );
// };

// export default Navbar;
