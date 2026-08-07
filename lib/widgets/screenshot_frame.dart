import 'package:flutter/material.dart';
import '../design_system/app_ui_kit.dart';
import 'screenshot_placeholder.dart';

/// Renders either a real screenshot (in a bordered frame) or, when no asset
/// is available yet, the dashed [ScreenshotPlaceholder]. Frames are
/// phone-shaped (portrait) by default, or landscape for web/desktop
/// projects via [isDesktop], so a wide desktop screenshot doesn't get
/// squeezed into a tall phone outline.
class ScreenshotFrame extends StatelessWidget {
  const ScreenshotFrame({
    super.key,
    required this.label,
    this.assetPath,
    this.width = 190,
    this.isDesktop = false,
  });

  final String label;
  final String? assetPath;
  final double width;
  final bool isDesktop;

  @override
  Widget build(BuildContext context) {
    if (assetPath == null) {
      return ScreenshotPlaceholder(label: label, width: width, isDesktop: isDesktop);
    }

    // Desktop screenshots vary in aspect ratio, so they're shown in full
    // (contain, not cropped to cover) inside a slightly taller frame.
    // Phone screenshots reliably match the ~9:19.5 frame, so cover is safe.
    final height = isDesktop ? width * 0.62 : width * 2.16;
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          width: width,
          height: height,
          clipBehavior: Clip.antiAlias,
          decoration: BoxDecoration(
            color: AppColors.neutral50,
            borderRadius: AppRadius.xlBR,
            border: Border.all(color: AppColors.neutral200),
            boxShadow: AppShadows.sm,
          ),
          child: Image.asset(
            assetPath!,
            fit: isDesktop ? BoxFit.contain : BoxFit.cover,
          ),
        ),
        const SizedBox(height: AppSpacing.sm),
        Text(
          label,
          textAlign: TextAlign.center,
          style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: AppColors.neutral500),
        ),
      ],
    );
  }
}
