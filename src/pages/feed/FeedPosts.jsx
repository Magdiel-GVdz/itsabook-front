import { Box } from "@mui/material";
import SearchBook from "../../components/SearchBook";
import { AccountContext } from "../../context/Account";
import { useContext } from "react";

const FeedPosts = () => {
  const { userAttributes } = useContext(AccountContext);

  return (
    <Box flex={4} p={5}>
      <Box mt={"60"} position="sticky">
        <h1>hola</h1>
        {/* <pre>{JSON.stringify(userAttributes, null, 2)}</pre> */}
      </Box>
    </Box>
  );
};

export default FeedPosts;
