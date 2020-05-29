// this is three
if (code.length === 0) {
	let lineRange = [[range.start.row, 0]];
	editor.getTextInBufferRange(lineRange);
}

this.focusInput();

let filePath = editor.getPath();
const directory = atom.project.getDirectories().find(directory => directory.contains(filePath));
if (directory) {
	atom.project.repositoryForDirectory(directory).then(projectRepo => {
		if (projectRepo) {
		}
	});
}
