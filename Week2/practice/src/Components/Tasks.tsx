import {
  Button,
  Input,
  ListItem,
  OrderedList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios, { Axios,AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { detail, taskType } from "../DataTypes";



const Tasks = () => {
  const [todo, setTodo] = useState<detail>();
  const navigate = useNavigate();
  const [task, setTask] = useState<string>("");
  let token = JSON.parse(localStorage.getItem("t-token")||"{}");

  const { id } = useParams();


  function handleAdd(t:string){
    let tasks = [...todo?.tasks, { title: t }];
    // setTodo((prev)=>{return {...prev, tasks:[...prev?.tasks,{ title: "hell" }]}})
    axios.patch(`http://localhost:8080/signup/${id}`, {
        tasks,
      })
      .then((res) => getTodo());
  }

  async function getTodo(){
    // axios.get(`http://localhost:8080/signup/${id}`).then((res) => {
    //   console.log("res",res.data);
    //   setTodo(res.data);
    // });
    let response: AxiosResponse<detail>=await axios.get(`http://localhost:8080/signup/${id}`)
    console.log(response.data)
    setTodo(response.data);
  }

  console.log("todo",todo)

  function handleLogout(){
    localStorage.removeItem("token");
    navigate("/login");
  }

  function handleDel(title:string){
    let tasks = todo?.tasks.filter((e:any) => {
      return e.title !== title;
    });
    axios
      .patch(`http://localhost:8080/signup/${id}`, {
        tasks,
      })
      .then((res) => getTodo());
  }

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div id="taskDiv">
    <div id="logout">
      <p>Hello</p>
      <Button
        bg={"black"}
        color={"white"}
        _hover={{ bg: "gray.700" }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>

    <Text as="b" fontSize={"3xl"} color="teal">
      {token.name}
    </Text>

    <p>Good to See you</p>

    {/* map the Tasks */}
    <TableContainer id="taskTable">
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Task Name</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {todo?.tasks?.map((e:any, i:number) => (
            <Tr key={i}>
              <Td>
                {" "}
                <Text fontSize={"lg"}>{e.title}</Text>{" "}
              </Td>
              <Td>
                <Button
                  bg={"red.400"}
                  color={"white"}
                  _hover={{ bg: "red.500" }}
                  onClick={() => handleDel(e.title)}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>

    <div id="taskInput">
      <Input
        size="md"
        type="text"
        placeholder="Add Task Here"
        onChange={(e) => setTask(e.target.value)}
      />
      <Button
        bg={"blue.600"}
        color={"white"}
        _hover={{ bg: "blue.700" }}
        onClick={() => handleAdd(task)}
      >
        Add New Task
      </Button>
    </div>
  </div>
  )
}

export default Tasks
