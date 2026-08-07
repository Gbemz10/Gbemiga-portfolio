import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'app_colors.dart';

/// Typography scale built on Plus Jakarta Sans.
class AppTypography {
  AppTypography._();

  static TextTheme textTheme(Color baseColor) {
    final base = GoogleFonts.plusJakartaSansTextTheme();

    TextStyle style({
      required double size,
      required FontWeight weight,
      double? height,
      double? letterSpacing,
      Color? color,
    }) {
      return GoogleFonts.plusJakartaSans(
        fontSize: size,
        fontWeight: weight,
        height: height,
        letterSpacing: letterSpacing,
        color: color ?? baseColor,
      );
    }

    return base.copyWith(
      displayLarge: style(size: 57, weight: FontWeight.w800, height: 1.1, letterSpacing: -1.5),
      displayMedium: style(size: 45, weight: FontWeight.w800, height: 1.12, letterSpacing: -1),
      displaySmall: style(size: 36, weight: FontWeight.w800, height: 1.15, letterSpacing: -0.5),

      headlineLarge: style(size: 32, weight: FontWeight.w700, height: 1.2, letterSpacing: -0.5),
      headlineMedium: style(size: 28, weight: FontWeight.w700, height: 1.22, letterSpacing: -0.3),
      headlineSmall: style(size: 24, weight: FontWeight.w700, height: 1.25),

      titleLarge: style(size: 20, weight: FontWeight.w600, height: 1.3),
      titleMedium: style(size: 16, weight: FontWeight.w600, height: 1.4, letterSpacing: 0.1),
      titleSmall: style(size: 14, weight: FontWeight.w600, height: 1.4, letterSpacing: 0.1),

      bodyLarge: style(size: 16, weight: FontWeight.w500, height: 1.5),
      bodyMedium: style(size: 14, weight: FontWeight.w500, height: 1.5),
      bodySmall: style(size: 12, weight: FontWeight.w500, height: 1.45),

      labelLarge: style(size: 14, weight: FontWeight.w600, height: 1.2, letterSpacing: 0.1),
      labelMedium: style(size: 12, weight: FontWeight.w600, height: 1.2, letterSpacing: 0.2),
      labelSmall: style(size: 11, weight: FontWeight.w600, height: 1.2, letterSpacing: 0.3),
    );
  }

  static TextTheme get light => textTheme(AppColors.neutral900);
  static TextTheme get dark => textTheme(AppColors.neutral50);
}
