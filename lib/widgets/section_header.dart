import 'package:flutter/material.dart';
import '../design_system/app_ui_kit.dart';

/// Consistent "eyebrow + title (+ optional subtitle)" heading used at the
/// top of every section (About, Projects, Contact) so the page reads as one
/// rhythm instead of each section inventing its own heading style.
class SectionHeader extends StatelessWidget {
  const SectionHeader({super.key, required this.eyebrow, required this.title, this.subtitle});

  final String eyebrow;
  final String title;
  final String? subtitle;

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          eyebrow,
          style: textTheme.labelLarge?.copyWith(color: AppColors.primary, letterSpacing: 0.6),
        ),
        const SizedBox(height: AppSpacing.sm),
        Text(title, style: textTheme.headlineLarge),
        if (subtitle != null) ...[
          const SizedBox(height: AppSpacing.md),
          ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 620),
            child: Text(subtitle!, style: textTheme.bodyLarge?.copyWith(color: AppColors.neutral500)),
          ),
        ],
      ],
    );
  }
}
