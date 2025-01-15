import "./_avatar.scss";

export const createAvatarTwo = (name: string, title: string, containerId = "avatar-container") => {
    const avatarContainer = document.getElementById(containerId);

    const avatarSpan = document.createElement("span");
    const avatarImg = document.createElement("div");
    avatarImg.id = name;
    const avatarText = document.createElement("p");

    avatarText.innerHTML = `Name: ${name}<br>Title: ${title}`;

    avatarSpan.appendChild(avatarImg);
    avatarSpan.appendChild(avatarText);
    avatarContainer?.appendChild(avatarSpan);
};
