import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";

import FollowersCard from "../FollowersCard/FollowersCard";

const FollowersModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <div style={{ height: "100%", display: "flex", padding: "10px" }}>
        <FollowersCard location="modal" style={{ flex: 1 }} />
      </div>
    </Modal>
  );
};


export default FollowersModal;
