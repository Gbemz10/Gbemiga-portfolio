import 'package:flutter/material.dart';
import '../data/projects_data.dart';
import '../design_system/app_ui_kit.dart';
import 'project_card.dart';
import 'section_header.dart';

class ProjectsSection extends StatelessWidget {
  const ProjectsSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SectionHeader(
          eyebrow: 'PROJECTS',
          title: "Things I've built",
          subtitle: 'Four projects, four different constraints, a formally tested capstone, a live '
              'production app, a tool in daily use, and a design exploration.',
        ),
        const SizedBox(height: AppSpacing.xxxl),
        for (int i = 0; i < projects.length; i++)
          Padding(
            padding: EdgeInsets.only(bottom: i == projects.length - 1 ? 0 : AppSpacing.xxl),
            child: ProjectCard(project: projects[i]),
          ),
      ],
    );
  }
}
