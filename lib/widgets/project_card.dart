import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../data/project.dart';
import '../design_system/app_ui_kit.dart';
import 'screenshot_frame.dart';

class ProjectCard extends StatelessWidget {
  const ProjectCard({super.key, required this.project});

  final Project project;

  Future<void> _openLink(BuildContext context, String url) async {
    final uri = Uri.parse(url);
    final ok = await launchUrl(uri, mode: LaunchMode.externalApplication);
    if (!ok && context.mounted) {
      showAppSnackbar(context, message: "Couldn't open the link", variant: AppAlertVariant.danger);
    }
  }

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;
    return AppCard(
      elevated: project.flagship,
      padding: const EdgeInsets.all(AppSpacing.xxl),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                width: 40,
                height: 40,
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  color: project.accent.withValues(alpha: 0.12),
                  borderRadius: AppRadius.mdBR,
                ),
                child: Icon(project.icon, size: 20, color: project.accent),
              ),
              const SizedBox(width: AppSpacing.md),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(project.name, style: textTheme.headlineSmall),
                    const SizedBox(height: 2),
                    Text(
                      project.status,
                      style: TextStyle(
                        fontSize: 12,
                        fontWeight: FontWeight.w700,
                        color: project.accent,
                        letterSpacing: 0.2,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.lg),
          Text(project.tagline, style: textTheme.titleMedium?.copyWith(color: AppColors.neutral600)),
          const SizedBox(height: AppSpacing.lg),
          Text(
            project.description,
            style: textTheme.bodyLarge?.copyWith(color: AppColors.neutral700, height: 1.6),
          ),
          const SizedBox(height: AppSpacing.xl),
          Wrap(
            spacing: AppSpacing.sm,
            runSpacing: AppSpacing.sm,
            children: [
              for (final tech in project.techStack) AppBadge(label: tech, variant: AppBadgeVariant.info),
            ],
          ),
          const SizedBox(height: AppSpacing.xl),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              for (final point in project.highlights)
                Padding(
                  padding: const EdgeInsets.only(bottom: AppSpacing.sm),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Padding(
                        padding: EdgeInsets.only(top: 3),
                        child: Icon(Icons.check_circle_rounded, size: 16, color: AppColors.success),
                      ),
                      const SizedBox(width: AppSpacing.sm),
                      Expanded(
                        child: Text(
                          point,
                          style: textTheme.bodyMedium?.copyWith(color: AppColors.neutral700, height: 1.5),
                        ),
                      ),
                    ],
                  ),
                ),
            ],
          ),
          const SizedBox(height: AppSpacing.xl),
          Wrap(
            spacing: AppSpacing.xxl,
            runSpacing: AppSpacing.xl,
            children: [
              for (int i = 0; i < project.screenshotLabels.length; i++)
                ScreenshotFrame(
                  label: project.screenshotLabels[i],
                  assetPath: project.screenshotAssets[i],
                  width: project.isDesktop ? 560 : 190,
                  isDesktop: project.isDesktop,
                ),
            ],
          ),
          const SizedBox(height: AppSpacing.xxl),
          Wrap(
            spacing: AppSpacing.md,
            runSpacing: AppSpacing.sm,
            children: [
              for (final link in project.links)
                AppButton(
                  label: link.label,
                  variant: AppButtonVariant.outline,
                  icon: Icons.open_in_new,
                  onPressed: () => _openLink(context, link.url),
                ),
            ],
          ),
        ],
      ),
    );
  }
}
