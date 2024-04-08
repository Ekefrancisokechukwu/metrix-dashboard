import Image from "next/image";

const UserProfile = () => {
  return (
    <div>
      <button>
        <Image
          src={"/img/profile.png"}
          alt="profile"
          width={32}
          height={32}
          style={{ borderRadius: 8 }}
        />
      </button>
    </div>
  );
};
export default UserProfile;
