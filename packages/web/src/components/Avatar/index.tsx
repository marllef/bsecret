import { Skeleton, Avatar as MuiAvatar } from "@mui/material";

interface Props {
  loading: boolean;
  name: string;
  size?: number;
}

export const Avatar = ({ loading, name = "", size = 80 }: Props) => {
  const displayName = name?.split(" ");
  return (
    <div>
      {loading ? (
        <Skeleton variant="circular" width={size} height={size} />
      ) : (
        <MuiAvatar
          sx={{
            width: size,
            height: size,
            fontSize: size / 2,
            backgroundColor: "#6365f1a6",
          }}
        >
          {`${displayName[0][0]}${displayName[1][0]}`}
        </MuiAvatar>
      )}
    </div>
  );
};
