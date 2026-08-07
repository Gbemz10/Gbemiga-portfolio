import 'package:flutter/material.dart';

/// A link shown on a project card — e.g. "View on GitHub" -> repo URL.
class ProjectLink {
  const ProjectLink({required this.label, required this.url});
  final String label;
  final String url;
}

/// Data for a single portfolio project. Kept as a plain data class (no
/// business logic) so the content lives in one place (`projects_data.dart`)
/// and every project card renders it identically.
class Project {
  const Project({
    required this.name,
    required this.status,
    required this.tagline,
    required this.description,
    required this.techStack,
    required this.highlights,
    required this.links,
    required this.screenshotLabels,
    required this.screenshotAssets,
    required this.icon,
    required this.accent,
    this.flagship = false,
    this.isDesktop = false,
  });

  final String name;

  /// Small brand mark shown next to the project name — gives each card its
  /// own identity instead of every card looking like a copy of the last one.
  final IconData icon;
  final Color accent;

  /// Short status chip, e.g. "Capstone — completed & defended", "Live".
  final String status;

  final String tagline;
  final String description;
  final List<String> techStack;
  final List<String> highlights;
  final List<ProjectLink> links;

  /// Labels for the screenshot frames on the card (e.g. "Landing / Splash",
  /// "Home screen").
  final List<String> screenshotLabels;

  /// Asset path for each screenshot slot, same length/order as
  /// [screenshotLabels]. `null` at a given index renders a placeholder
  /// frame instead — fill in real screenshots as they come in.
  final List<String?> screenshotAssets;

  /// Flagship projects render larger, first, with an elevated card.
  final bool flagship;

  /// True for web/desktop apps, so screenshot frames render landscape
  /// instead of the default phone-shaped portrait frame.
  final bool isDesktop;
}
