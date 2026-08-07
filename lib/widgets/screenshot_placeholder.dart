import 'package:flutter/material.dart';
import '../design_system/app_ui_kit.dart';

/// A placeholder frame sized for a real screenshot to be dropped in later.
/// Deliberately looks like a placeholder (dashed border, muted icon) rather
/// than faking real app content. Renders phone-shaped (portrait) by default,
/// or landscape for web/desktop projects via [isDesktop].
class ScreenshotPlaceholder extends StatelessWidget {
  const ScreenshotPlaceholder({
    super.key,
    required this.label,
    this.width = 190,
    this.isDesktop = false,
  });

  final String label;
  final double width;
  final bool isDesktop;

  @override
  Widget build(BuildContext context) {
    final height = isDesktop ? width * 0.62 : width * 2.16;
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        SizedBox(
          width: width,
          height: height,
          child: CustomPaint(
            painter: _DashedRRectPainter(radius: AppRadius.xl, color: AppColors.neutral300),
            child: Container(
              margin: const EdgeInsets.all(2),
              decoration: BoxDecoration(
                color: AppColors.neutral50,
                borderRadius: BorderRadius.circular(AppRadius.xl - 2),
              ),
              alignment: Alignment.center,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(
                    isDesktop ? Icons.desktop_windows_outlined : Icons.smartphone_outlined,
                    size: 26,
                    color: AppColors.neutral400,
                  ),
                  const SizedBox(height: AppSpacing.sm),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: AppSpacing.md),
                    child: Text(
                      'Screenshot coming soon',
                      textAlign: TextAlign.center,
                      style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: AppColors.neutral400),
                    ),
                  ),
                ],
              ),
            ),
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

class _DashedRRectPainter extends CustomPainter {
  _DashedRRectPainter({required this.radius, required this.color});
  final double radius;
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final rect = Rect.fromLTWH(1, 1, size.width - 2, size.height - 2);
    final rrect = RRect.fromRectAndRadius(rect, Radius.circular(radius));
    final path = Path()..addRRect(rrect);
    final dashedPath = _dashPath(path, dashArray: const [6, 5]);
    final paint = Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.5;
    canvas.drawPath(dashedPath, paint);
  }

  Path _dashPath(Path source, {required List<double> dashArray}) {
    final dest = Path();
    for (final metric in source.computeMetrics()) {
      double distance = 0;
      bool draw = true;
      int i = 0;
      while (distance < metric.length) {
        final len = dashArray[i % dashArray.length];
        if (draw) {
          dest.addPath(metric.extractPath(distance, distance + len), Offset.zero);
        }
        distance += len;
        draw = !draw;
        i++;
      }
    }
    return dest;
  }

  @override
  bool shouldRepaint(covariant _DashedRRectPainter oldDelegate) =>
      oldDelegate.radius != radius || oldDelegate.color != color;
}
