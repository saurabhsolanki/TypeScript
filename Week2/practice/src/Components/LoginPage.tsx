import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  useState,
  FormEvent,
  ChangeEvent,
  MouseEventHandler,
  MouseEvent,
  useEffect,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { detail } from "../DataTypes";

const initial = {
  email: "",
  password: "",
};
const LoginPage = () => {
  const [data, setData] = useState<detail>(initial);
  const [users, setUsers] = useState<Array<detail>>([]);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  function handleSubmit(e: MouseEvent<HTMLElement>) {
    // function handleSubmit(){
    e.preventDefault();
    const { email, password } = data;
    let check = users.find((e) => e.email === email && e.password === password);

    if(check){
        alert("login Successfull");
        localStorage.setItem("t-token", JSON.stringify(check));
        navigate(`/tasks/${check.id}`);
    }else {
        alert("please check credentials");
      }
  }

  function verify() {
    fetch("http://localhost:8080/signup", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }
  useEffect(() => {
    verify();
  }, []);

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
            <Heading fontSize={"3xl"}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your User name"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                </Stack>
                <Button
                  onClick={(e) => handleSubmit(e)}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
                <div id="already">
                  Don't Have an Account ? <Link to="/">Register</Link>
                </div>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default LoginPage;
