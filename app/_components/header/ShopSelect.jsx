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
      <SelectTrigger className="bg-[#FEF5EA] sm:w-[125px] w-[80px] rounded-md px-[12px] py-[5px] text-[#53545c] h-auto hover:bg-[#f7e5cd]">
        <SelectValue placeholder={"Nanny’s Shop"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="My Shop"> Nanny’s Shop</SelectItem>
          <SelectItem value="Nanny’s Shop">My shop</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default ShopSelect;
