const getAdmins = (map) => {
	let admins = [];
    
	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const getUsers = (map) => {
    let users = [];

    for ([key, value] of map){
        if (value === 'USER'){
                users.push(key);
        }
    }

    return users;
}

const getSudos = (map) => {
    let sudos = [];

    for ([key, value] of map){
        if (value === 'SUDO'){
                sudos.push(key);
        }
    }

    return sudos;
}

const userRoles = new Map();

userRoles.set('Misael', 'SUDO');
userRoles.set('Ana', 'ADMIN');
userRoles.set('Maria', 'ADMIN');
userRoles.set('joão', 'USER');
userRoles.set('Lara', 'USER');

console.log("Os administradores são " + getAdmins(userRoles));
console.log("Os usuários são " + getUsers(userRoles));
console.log("Os sudos são " + getSudos(userRoles));