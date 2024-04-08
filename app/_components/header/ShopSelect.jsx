import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShopSelect = () => {
  return (
    <Select>
      <SelectTrigger className="bg-[#FEF5EA] w-[125px] rounded-md px-[12px] py-[5px] text-[#53545c] h-auto hover:bg-[#f7e5cd]">
        <SelectValue placeholder="My Shop" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="My Shop">My shop</SelectItem>
          <SelectItem value="Nanny’s Shop">Nanny’s Shop</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default ShopSelect;
