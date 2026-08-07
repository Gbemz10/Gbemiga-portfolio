import 'package:flutter/material.dart';
import '../design_system/app_ui_kit.dart';
import 'section_header.dart';

class AboutSection extends StatelessWidget {
  const AboutSection({super.key});

  static const _skills = [
    'Flutter',
    'Dart',
    'JavaScript',
    'TypeScript',
    'Python',
    'Node.js / Express',
    'PostgreSQL',
    'Prisma',
    'Solidity',
    'Firebase',
    'SQLite',
    'REST API design',
    'Paystack',
    'Termii',
    'Git',
    'Figma',
  ];

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SectionHeader(eyebrow: 'ABOUT', title: 'A bit about how I work'),
        const SizedBox(height: AppSpacing.xxxl),
        ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 760),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                "I'm Gbemiga, a mobile and full-stack developer based in Nigeria. I care more "
                "about whether software holds up once real people are using it than whether it "
                "looks good in a demo.",
                style: textTheme.bodyLarge?.copyWith(color: AppColors.neutral700, height: 1.7),
              ),
              const SizedBox(height: AppSpacing.lg),
              Text(
                "That shows up in how I build: my capstone project went through 8 formal security "
                "test cases and a usability study with real participants before I called it done. "
                "My production apps handle real payments through server-verified webhooks, not "
                "client-trusted shortcuts. And one of my apps is in daily use by a real small "
                "business today, not sitting in a repo.",
                style: textTheme.bodyLarge?.copyWith(color: AppColors.neutral700, height: 1.7),
              ),
            ],
          ),
        ),
        const SizedBox(height: AppSpacing.xxxl),
        Text('Tools & technologies', style: textTheme.titleMedium),
        const SizedBox(height: AppSpacing.md),
        Wrap(
          spacing: AppSpacing.sm,
          runSpacing: AppSpacing.sm,
          children: [
            for (final skill in _skills) AppBadge(label: skill, variant: AppBadgeVariant.neutral),
          ],
        ),
      ],
    );
  }
}
