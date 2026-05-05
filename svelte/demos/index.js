import { mount } from "svelte";
import Demos from "./common/Index.svelte";

import Willow from "../src/themes/Willow.svelte";
import WillowDark from "../src/themes/WillowDark.svelte";
import Material from "../src/themes/Material.svelte";

import { WillowIcon, WillowDarkIcon } from "./assets/icons/index";

mount(Demos, {
	target: document.querySelector("#wx_demo_area") || document.body,
	props: {
		publicName: "DataGrid",
		productTag: "grid",
		productLink: "datagrid",
		skins: [
			{
				id: "material",
				label: "Material",
				component: Material,
				icon: WillowIcon,
			},
			{
				id: "willow",
				label: "Willow",
				component: Willow,
				icon: WillowIcon,
			},
			{
				id: "willow-dark",
				label: "Dark",
				component: WillowDark,
				icon: WillowDarkIcon,
			},
		],
	},
});
