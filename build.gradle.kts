plugins {
    // this is necessary to avoid the plugins to be loaded multiple times
    // in each subproject's classloader
    // alias is for using plugins declared in a gradle version catalog
    alias(libs.plugins.jetbrainsCompose) apply false
    alias(libs.plugins.androidApplication) apply false
    alias(libs.plugins.kotlinMultiplatform) apply false
}