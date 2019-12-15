const skills = [
    { name: "HTML5", level: 1, project: 'browser game'},
    { name: "CSS3", level: 1, project: 'browser game'},
    { name: "JavaScript", level: 1 ,project: 'browser game'},
    { name: "jQuery", level: 1, project: 'webpage'},
    { name: "Node", level: 1, project: 'webside'},
    { name: "Express", level: 1, project: 'webside'},
    { name: "Mongoose", level: 1, project: 'webside'},
];

const getAll = () => {
    return skills;
}

const getOne = id => {
    return skills[id];
};

const create = data => {
    skills.push(data);
};

const deleteOne = id => {
    skills.splice(id, 1);
}

const updateOne = (id, newData) => {
    console.log(id);
    console.log(newData);
    skills[id].name = newData.name;
    skills[id].level = newData.level;
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
}