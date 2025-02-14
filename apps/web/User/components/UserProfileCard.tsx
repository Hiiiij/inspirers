import {
  Avatar,
  Flex,
  Text,
  Heading,
  VStack,
  Box,
  Tag,
} from "@chakra-ui/react";
import { Button } from "ui";
import { FiFacebook, FiTwitter, FiLinkedin, FiEdit3 } from "react-icons/fi";

export const UserProfileCard = ({ user }) => {
  let flip: boolean = true;
  // set flip to true to observe empty state and to false to observe the default data.
  return flip ? (
    <Flex
      bg="brand.white"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      borderRadius="1rem"
      p="8"
      direction="column"
      color="brand.primaryText"
      width="100%"
    >
      <Flex gap={4} justifyContent="space-between" direction="column">
        <Flex gap={2} justifyContent="space-between">
          <Flex gap={2}>
            <Avatar src={user?.image || "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg"} />
            <VStack alignItems="flex-start">
              <Heading color="brand.primary" size="sm">
                {user?.name}
              </Heading>
              <Text>@guest</Text>
            </VStack>
          </Flex>
          <Button
            bg="brand.white"
            color="brand.primaryText"
            onClick={() => {}}
            icon={<FiEdit3 />}
            size="sm"
          >
            Create Profile
          </Button>
        </Flex>
        <VStack alignItems="flex-start" width="100%">
          <Flex gap={4}>
            <Text>
              <Box as="span" color="brand.secondary" fontWeight="700">
                0
              </Box>{" "}
              following
            </Text>
            <Text>
              <Box as="span" color="brand.secondary" fontWeight="700">
                0
              </Box>{" "}
              followers
            </Text>
          </Flex>
          <Flex gap={2} flexWrap="wrap">
            <Tag bg="brand.highlight"></Tag>
            <Tag bg="brand.highlight1"></Tag>
            <Tag bg="brand.highlight"></Tag>
          </Flex>
          <Flex gap={4} flexWrap="wrap" py="2">
            <FiFacebook size="1.5rem" />
            <FiTwitter size="1.5rem" />
            <FiLinkedin size="1.5rem" />
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  ) : (
    <Flex
      bg="brand.white"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      borderRadius="1rem"
      p="8"
      direction="column"
      color="brand.primaryText"
      width="100%"
    >
      <Flex gap={4} justifyContent="space-between" direction="column">
        <Flex gap={2} justifyContent="space-between">
          <Flex gap={2}>
            <Avatar src={user.image} />
            <VStack alignItems="flex-start">
              <Heading color="brand.primary" size="sm">
                {user.name}
              </Heading>
              <Text>@junubiman</Text>
            </VStack>
          </Flex>
          <Button
            bg="brand.white"
            color="brand.primaryText"
            onClick={() => {}}
            icon={<FiEdit3 />}
            size="sm"
          >
            Edit Profile
          </Button>
        </Flex>
        <VStack alignItems="flex-start" width="100%">
          <Flex gap={4}>
            <Text>
              <Box as="span" color="brand.secondary" fontWeight="700">
                500
              </Box>{" "}
              following
            </Text>
            <Text>
              <Box as="span" color="brand.secondary" fontWeight="700">
                500
              </Box>{" "}
              followers
            </Text>
          </Flex>
          <Flex gap={2} flexWrap="wrap">
            <Tag bg="brand.highlight">Tech</Tag>
            <Tag bg="brand.highlight1">Software</Tag>
            <Tag bg="brand.highlight">Mentorship</Tag>
          </Flex>
          <Flex gap={4} flexWrap="wrap" py="2">
            <FiFacebook size="1.5rem" />
            <FiTwitter size="1.5rem" />
            <FiLinkedin size="1.5rem" />
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
};
