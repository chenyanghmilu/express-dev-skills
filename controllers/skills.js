const Skills = require("../models/skill");

const index = (req, res) => {
res.render("skills/index", {
    skills: Skills.getAll()
});
};

const show = (req, res) => {
res.render("skills/show", {
    id: req.params.id,
    skill: Skills.getOne(req.params.id)
});
};

const newSkill = (req, res) => {
res.render("skills/new");
};

const create = (req, res) => {
Skills.create(req.body);
res.redirect("/skills");
}

const deleteSkill = (req, res) => {
Skills.deleteOne(req.params.id);
res.redirect("/skills");
}

const edit = (req, res) => {
res.render("skills/edit", {
    id: req.params.id,
    skill: Skills.getOne(req.params.id)
});
}

const updateSkill = (req, res) => {
Skills.updateOne(req.params.id, req.body);
res.redirect(`/skills/${req.params.id}`);
}

module.exports = {
index,
show,
new: newSkill,
create,
delete: deleteSkill,
edit,
update: updateSkill
};