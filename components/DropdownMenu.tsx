import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { styled } from "../stitches.config";
import { Button } from "../components";

interface Props {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
}

export const Dropdown = ({
  children,
  trigger = (
    <Button className="IconButton" aria-label="">
      Trigger
    </Button>
  ),
}: Props) => {
  return (
    <DropdownMenu.Root>
      <StyledTrigger asChild>{trigger}</StyledTrigger>

      <DropdownMenu.Portal>
        <StyledContent sideOffset={10}>
          <StyledItem>New item</StyledItem>
          <StyledItem>Another item</StyledItem>
        </StyledContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const StyledContent = styled(DropdownMenu.Content, {
  background: "$offprimaryBg",
  padding: 5,
  borderRadius: 5,
  marginRight: 10,
});

const StyledItem = styled(DropdownMenu.Item, {
  padding: 5,
  cursor: "pointer",
  borderRadius: 5,
  "&:hover": {
    background: "$primaryBg",
    outline: "none",
  },
});

const StyledTrigger = styled(DropdownMenu.Trigger, {
  cursor: "pointer",
});
