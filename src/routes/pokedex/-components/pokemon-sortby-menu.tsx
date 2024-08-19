import { SortIcon } from '@/components/icons';
import { Button } from '@/components/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

type TProps = {
  value: string;
  onValueChange: ((value: string) => void) | undefined;
};

function PokedexSortByMenu({ value, onValueChange }: TProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full p-2"
        >
          <SortIcon fill="#DC0A2D" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36">
        <DropdownMenuRadioGroup
          value={value}
          onValueChange={onValueChange}
        >
          <DropdownMenuRadioItem value="Number">Number</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Name">Name</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default PokedexSortByMenu;
