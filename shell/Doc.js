function shell(cmd) {
    switch (cmd.toLowerCase()) {
        case "intro": loopLines(intro, "color2 margin", 80); break;
        case "q0": loopLines(q0, "color2 margin", 80); break;
        default: addLine('<span class="inherit">Command not found. For a list of commands, type <span class="command">\'help\'</span>.</span>', "error", 100); break;
    }
}