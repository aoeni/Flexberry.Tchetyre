﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Tchetyre
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Место на рейс.
    /// </summary>
    // *** Start programmer edit section *** (МестоНаРейс CustomAttributes)

    // *** End programmer edit section *** (МестоНаРейс CustomAttributes)
    [AutoAltered()]
    [Caption("Место на рейс")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("МестоНаРейсE", new string[] {
            "Класс as \'Класс\'",
            "Место as \'Место\'"})]
    [View("МестоНаРейсL", new string[] {
            "Класс as \'Класс\'",
            "Место as \'Место\'"})]
    public class МестоНаРейс : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Tchetyre.КлассБилета fКласс;
        
        private string fМесто;
        
        // *** Start programmer edit section *** (МестоНаРейс CustomMembers)

        // *** End programmer edit section *** (МестоНаРейс CustomMembers)

        
        /// <summary>
        /// Класс.
        /// </summary>
        // *** Start programmer edit section *** (МестоНаРейс.Класс CustomAttributes)

        // *** End programmer edit section *** (МестоНаРейс.Класс CustomAttributes)
        public virtual IIS.Tchetyre.КлассБилета Класс
        {
            get
            {
                // *** Start programmer edit section *** (МестоНаРейс.Класс Get start)

                // *** End programmer edit section *** (МестоНаРейс.Класс Get start)
                IIS.Tchetyre.КлассБилета result = this.fКласс;
                // *** Start programmer edit section *** (МестоНаРейс.Класс Get end)

                // *** End programmer edit section *** (МестоНаРейс.Класс Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (МестоНаРейс.Класс Set start)

                // *** End programmer edit section *** (МестоНаРейс.Класс Set start)
                this.fКласс = value;
                // *** Start programmer edit section *** (МестоНаРейс.Класс Set end)

                // *** End programmer edit section *** (МестоНаРейс.Класс Set end)
            }
        }
        
        /// <summary>
        /// Место.
        /// </summary>
        // *** Start programmer edit section *** (МестоНаРейс.Место CustomAttributes)

        // *** End programmer edit section *** (МестоНаРейс.Место CustomAttributes)
        [StrLen(255)]
        public virtual string Место
        {
            get
            {
                // *** Start programmer edit section *** (МестоНаРейс.Место Get start)

                // *** End programmer edit section *** (МестоНаРейс.Место Get start)
                string result = this.fМесто;
                // *** Start programmer edit section *** (МестоНаРейс.Место Get end)

                // *** End programmer edit section *** (МестоНаРейс.Место Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (МестоНаРейс.Место Set start)

                // *** End programmer edit section *** (МестоНаРейс.Место Set start)
                this.fМесто = value;
                // *** Start programmer edit section *** (МестоНаРейс.Место Set end)

                // *** End programmer edit section *** (МестоНаРейс.Место Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "МестоНаРейсE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МестоНаРейсE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МестоНаРейсE", typeof(IIS.Tchetyre.МестоНаРейс));
                }
            }
            
            /// <summary>
            /// "МестоНаРейсL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МестоНаРейсL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МестоНаРейсL", typeof(IIS.Tchetyre.МестоНаРейс));
                }
            }
        }
    }
}
