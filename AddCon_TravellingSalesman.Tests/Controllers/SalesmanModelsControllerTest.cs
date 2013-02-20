//using System;
//using System.Collections.Generic;
//using System.Linq;
//using Microsoft.VisualStudio.TestTools.UnitTesting;
//using AddCon_TravellingSalesman.Controllers;
//using AddCon_TravellingSalesman.Models;

//namespace AddCon_TravellingSalesman.Tests
//{
//    [TestClass]
//    public class SalesmanModelsControllerTest
//    {
//        [TestMethod]
//        public void IndexTest()
//        {
//            // Arrange
//            var controller = new SalesmanModelsController();
        
//            // Act
//            var viewResult = controller.Index();
//            var viewModel = (SalesmanModel)viewResult.Model;
        
//            // Assert
//            // Confirm that saleman+ displayed
//            // Assert.AreEqual("expected value", viewModel.SomeProperty);
//            Assert.AreNotEqual(viewModel, 0);
//        }

//        //
//        // GET: /SalesmanModels/SequenceSalesman
//        [TestMethod]
//        public void sequenceSalemsanTest()
//        {
//            // Arrange
//            var controller = new SalesmanModelsController();

//            // Act
//            var viewResult = controller.Index();
//            var viewModel = (SalesmanModel)viewResult.Model;

//            // Assert
//            // Confirm that saleman+ displayed
//            // Assert.AreEqual("expected value", viewModel.SomeProperty);
//            Assert.AreNotEqual(viewModel, 0);
//        }

//        [TestMethod]
//        public void DetailsTest()
//        {
//            // Arrange
//            var controller = new SalesmanModelsController();
        
//            // Act
//            var viewResult = controller.Details(default(int));
//            var viewModel = (SalesmanModel)viewResult.Model;
        
//            // Assert
//            // Assert.AreEqual("expected value", viewModel.SomeProperty);
//            Assert.Inconclusive(); // Todo: Make assertions, then remove this line
//        }
//    }
//}