import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { useState,FormEvent,ChangeEvent,MouseEventHandler,MouseEvent } from "react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import { Link, useNavigate } from "react-router-dom";
  import axios from "axios";
import { detail } from "../DataTypes";

  const initial = {
    email: "",
    password: "",
    name:"",
    tasks: [],
  };

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState<detail>(initial);
    const navigate = useNavigate();
  
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=> {
      const { name, value } = e.target;
      setData({
        ...data,
        [name]: value,
      });
    }
    
    function handleSubmit(e:MouseEvent<HTMLElement>){
      // function handleSubmit(){
        e.preventDefault();
        console.log(data)
        axios.post("http://localhost:8080/signup", data).then((res) => {
          console.log(res.data, "successfull");
          localStorage.setItem("t-token", JSON.stringify(data));
          navigate("/login");
        });
    }

  return (
    <div>
       <Flex
      minH={"10vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={5}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your Password"
                  onChange={handleChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user ?{" "}
                <strong>
                  <Link to="/login">Login</Link>
                </strong>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </div>
  )
}

export default SignUpPage
