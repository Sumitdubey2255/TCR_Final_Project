import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import Navbar from "../user_components/Navbar/Navbar";
import Intro from "../user_components/Intro/Intro";
import Footer from "../user_components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../Context";

function Homepage() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Container maxW="xl" centerContent marginBottom={300}>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          // bg="#d986bc"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="3px"
        >
          <Text
            style={{ color: darkMode ? "white" : "" }}
            fontSize="4xl"
            fontFamily="Work sans"
            fontWeight={"bold"}
          >
            Join Us
          </Text>

        </Box>
        <Box
          //  bg="#F1B4BB"
          w="100%"
          p={4}
          borderRadius="lg"
          borderWidth="3px"color={"#ffff"}
        >
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab >Login</Tab>
              <Tab >Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default Homepage;
