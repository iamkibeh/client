import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AutoFixNormalOutlinedIcon from "@mui/icons-material/AutoFixNormalOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiPaper-root": {
		borderRadius: 6,
		// marginTop: theme.spacing(1),
		minWidth: 290,
		Right: 200,

		color:
			theme.palette.mode === "light"
				? "rgb(55, 65, 81)"
				: theme.palette.grey[300],
		boxShadow:
			"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
		"& .MuiMenu-list": {
			padding: "20px 0",
		},
		"& .MuiMenuItem-root": {
			"& .MuiSvgIcon-root": {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(2.5),
			},
			"&:active": {
				backgroundColor: alpha(
					theme.palette.primary.main,
					theme.palette.action.selectedOpacity
				),
			},
		},
	},
}));

export default function BottomMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="menu">
			<div
				className="bottom-profile-bar"
				onClick={handleClick}
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
			>
				<div className="profile-details-inner">
					<div className="profile-img-data">
						<img
							src="https://ik.imagekit.io/osr2ijzawtk/prod/upload/photo/8f7fa377-2b90-437d-bfa1-5058197d8fe3/adc42f4e-b71f-400d-bbcf-a8967b3fd352-jpeg?tr=h-284,w-284%27"
							alt="profile"
						/>
					</div>
					<div className="inner-title-data">
						<h3>Denis Ouma</h3>
						<p>Software Engineer</p>
					</div>
				</div>
			</div>
			<StyledMenu
				// className="styling"
				id="demo-customized-menu"
				MenuListProps={{
					"aria-labelledby": "demo-customized-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<p className="span-title">Account</p>
				<MenuItem onClick={handleClose} disableRipple>
					<PermIdentityOutlinedIcon />
					View Profile
				</MenuItem>
				<MenuItem onClick={handleClose} disableRipple>
					<AutoFixNormalOutlinedIcon />
					Edit profile
				</MenuItem>
				<MenuItem onClick={handleClose} disableRipple>
					<NotificationsNoneOutlinedIcon />
					Notifications
				</MenuItem>
				<Divider sx={{ my: 0.5 }} />
				<MenuItem onClick={handleClose} disableRipple>
					<LogoutOutlinedIcon />
					Sign Out
				</MenuItem>
			</StyledMenu>
		</div>
	);
}
